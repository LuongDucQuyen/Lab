import { BinanceWallet, Metamask, SafePalWallet, TrustWallet, WalletConnect  , TokenPocket , MathWallet} from '../components/icons';
export const API_URL = process.env.REACT_APP_API_URL
export const NetworkContextName = 'NETWORK';
// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 80
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20
export const ADDRESS_USD : any = {
	56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
	1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
	137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
	250:'0xAd84341756Bf337f5a0164515b1f6F993D194E1f'
  }

export const KEY_CRYPTOJS = '4kHlZXyYTew38QnxvWFnag=='

// wallet list
export const WALLET_LIST = [
	{ icon: Metamask, title: 'Metamask', connectorId: 'injected' },
	{ icon: BinanceWallet, title: 'Binance Wallet', connectorId: 'injected' },
	// { icon: SafePalWallet, title: 'SalePal Wallet', connectorId: 'injected' },
	{ icon: WalletConnect, title: 'Wallet Connect', connectorId: 'walletconnect' },
	{ icon: TrustWallet, title: 'Trust Wallet', connectorId: 'injected' },
	// { icon: TokenPocket, title: 'TokenPocket', connectorId: 'injected' },
	// { icon: MathWallet, title: 'Math Wallet', connectorId: 'injected' }
];
export const NEED_A_PLACEHOLDER = WALLET_LIST.length % 2 !== 0;

export const MAINNET_BSC_URL = 'https://bsc-dataseed.binance.org';
export const MAINNET_CHAIN_ID = 56;

// export const marketContractAddress = '0x7c76E1344A79fFe41Dd43239e30D60C57981dbF2';

