import React from 'react';
import { useAddToHomescreenPrompt } from '../../hooks/useAddToHomescreenPrompt';
import { Button } from '../Button';

export const AddToHomeScreen: React.FC = () => {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = React.useState(false);

  React.useEffect(() => {
    if (prompt) {
      setVisibleState(true);
    }
  }, [prompt]);

  if (!isVisible) {
    return <div />;
  }

  return (
    <div style={{ width: 300 }}>
      <Button label="Installer" onPress={promptToInstall} />
    </div>
  );
};
