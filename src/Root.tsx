import { Composition } from "remotion";
import { GunBatimi } from "./GunBatimi";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="GunBatimi"
      component={GunBatimi}
      durationInFrames={240}
      fps={30}
      width={1280}
      height={720}
    />
  );
};
