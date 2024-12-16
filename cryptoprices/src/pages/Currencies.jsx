import {Link} from 'react-router'

export default function Currencies(props) {
    const currencies = [
        { name: 'Bitcoin', symbol: 'BTC'},
        { name: 'Litecoin', symbol: 'LTC' },
        { name: 'Ethereum', symbol: 'ETH'},
        { name: 'Ethereum', symbol: 'ETH'},
        { name: 'Ethereum Classic', symbol: 'ETC' },
        { name: 'Stellar Lumens', symbol: 'XLM' },
        { name: 'Dash', symbol: 'DASH'},
        { name: 'Ripple', symbol: 'XRP' },
        { name: 'Zcash', symbol: 'ZEC'},
        { name: 'Bitcoin Diamond', symbol: 'BCD'},
        { name: 'Bitcoin', symbol: 'BTC'},
        { name: 'Bitcoin Cash', symbol: 'BCH'},
        { name: 'Monero', symbol: 'XMR'},
        { name: 'Bitcoin SV', symbol: 'BSV'},
        { name: 'Tezos', symbol: 'XTZ'},
        { name: 'Binance Coin', symbol: 'BNB'},
        { name: 'Tether', symbol: 'USDT'},
        { name: 'XRP', symbol: 'XRP'},
        { name: 'Uniswap', symbol: 'UNI'},
        { name: 'Stellar', symbol: 'XLM'},
        { name: 'Dogecoin', symbol: 'DOGE'},
        { name: 'Cardano', symbol: 'ADA'},
        { name: 'Polkadot', symbol: 'DOT'},
    ]

    return (
        <div className='currencies'>
            {currencies.map((coin) => {
                const { name, symbol } = coin;

                return (
                    <Link to={`/price/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                );
            })}   
        </div>
    )
}