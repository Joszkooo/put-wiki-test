import { useState } from 'react';

import { Button } from '@/components/ui/button';

export default function Toggle({ OnValue, OffValue }: { OnValue: string; OffValue: string }) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
  }
  return <Button onClick={handleClick}>{isClicked ? OnValue : OffValue}</Button>;
}
