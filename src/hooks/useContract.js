import { Contract } from '@ethersproject/contracts';
import idoTokenClaimDailyAbi from '../pages/Ido/Abi/idoTokenClaimDaily.json'
import idoTokenClaimAbi from '../pages/Ido/Abi/idoTokenClaim.json'
import abiBoxMarket from '../pages/Ino/Abi/abiBoxMarket.json'

import { useMemo } from 'react';

import { getContract } from '../utils';
// import tokenInfoAbi from '../config/abi/tokenInfo.json';
// import deployLaunchpadAbi from '../config/abi/deployLaunchpadAbi.json';

import { useActiveWeb3React } from './index';
// returns null on errors
export function useContract(address, ABI, withSignerIfPossible = true) {
	const { library, account } = useActiveWeb3React();

	// console.log('address sc: ', address)
	// console.log('ABI: ', ABI)

	return useMemo(() => {
		if (!address || !ABI || !library) return null;
		try {
			return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined);
		} catch (error) {
			console.error('Failed to get contract', error);
			return null;
		}
	}, [address, ABI, library, withSignerIfPossible, account]);
}

export function useIdoTokenClaimContract(scAddr, item) {
	return useContract(scAddr, item && item.claimRound === 100 ? idoTokenClaimDailyAbi : idoTokenClaimAbi)
  }

  export function useBoxMarketContract(address) {
	return useContract(address, abiBoxMarket, true)
  }