import { useWallets } from '@mysten/dapp-kit';


export default function ConnectWalletButton() {

    const { connect, isConnected, disconnect, address, currentWallet } = useWallets();

    return (
        <div>
            {isConnected ? (
                <button onClick={disconnect}>
                    Disconnect ({currentWallet?.name})
                </button>
            ) : (
                <button onClick={connect}>
                    Connect Sui Wallet
                </button>
            )}
        </div>
    );
}