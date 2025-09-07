import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client'; // SuiClient untuk interaksi dengan blockchain dan getFullnodeUrl untuk mendapatkan URL fullnode dari dependensi @mysten/sui.js/client
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519'; // Ed25519Keypair untuk generate keypair baru dari dependensi @mysten/sui.js/keypairs/ed25519

// Fungsi utama untuk query data dari blockchain Sui
async function queryBlockchainData() { // Fungsi async untuk memungkinkan penggunaan await di dalamnya
    try {
        // Koneksi ke testnet
        const client = new SuiClient({ // Inisialisasi SuiClient dengan URL fullnode testnet
            url: getFullnodeUrl('testnet') // Mendapatkan URL fullnode untuk jaringan testnet contohnya 'https://fullnode.testnet.sui.io'
        });
        
        console.log('✅ Berhasil terhubung ke Sui testnet'); // Konfirmasi koneksi berhasil
        
        // Generate atau gunakan keypair yang sudah ada
        const keypair = new Ed25519Keypair(); // Generate keypair baru (untuk penggunaan nyata, gunakan keypair yang sudah ada)
        const address = keypair.getPublicKey().toSuiAddress(); // Mendapatkan address dari public key
        
        console.log('📍 Address yang akan di-query:', address);
        console.log('-----------------------------------');
        
        // 1. Query balance SUI
        console.log('🔍 Mengecek balance SUI...');
        const balance = await client.getBalance({ // Menggunakan method getBalance dari SuiClient
            owner: address // Parameter owner diisi dengan address yang ingin di-query
        });
        console.log('💰 Balance SUI:', balance);
        
        // 2. Query semua coins yang dimiliki address
        console.log('\n🪙 Mengecek semua coins...');
        const allBalances = await client.getAllBalances({ // Menggunakan method getAllBalances dari SuiClient
            owner: address
        });
        console.log('💎 All Balances:', allBalances);
        
        // 3. Query objek-objek yang dimiliki address
        console.log('\n📦 Mengecek objek yang dimiliki...');
        const ownedObjects = await client.getOwnedObjects({
            owner: address,
            options: {
                showType: true,
                showContent: true,
                showDisplay: true
            }
        });
        console.log('🎁 Owned Objects:', ownedObjects);
        
        // 4. Query informasi latest checkpoint
        console.log('\n🔗 Mengecek latest checkpoint...');
        const latestCheckpoint = await client.getLatestCheckpointSequenceNumber();
        console.log('⛓️ Latest Checkpoint:', latestCheckpoint);
        
        // 5. Coba query dengan address yang memiliki balance (contoh address testnet)
        console.log('\n🔍 Testing dengan address yang memiliki balance...');
        const testAddress = '0x123'; // Ganti dengan address yang ada balance-nya di testnet
        try {
            const testBalance = await client.getBalance({
                owner: testAddress
            });
            console.log('💰 Test Address Balance:', testBalance);
        } catch (error) {
            console.log('⚠️ Test address tidak valid atau tidak ada balance');
        }
        
    } catch (error) {
        console.error('❌ Error saat query data:', error);
    }
}

// Jalankan fungsi
queryBlockchainData();