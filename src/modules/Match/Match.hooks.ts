import { useCallback, useMemo, useState } from 'react';

import { Weapons, aiNamesMap } from './Match.constants';
import { letTheComputerPlay } from './Match.utils';

export const useAiOpponent = () => {
  const [aiWeapon, setAiWeapon] = useState<Weapons>();

  const aiName = useMemo(
    () => (aiWeapon ? aiNamesMap[aiWeapon] || '' : ''),
    []
  );

  const aiFight = useCallback(() => {
    const computerWeapon = letTheComputerPlay();
    setAiWeapon(computerWeapon);
  }, []);

  return {
    aiFight,
    aiName,
    aiWeapon,
  };
};
