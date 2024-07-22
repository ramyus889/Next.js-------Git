import { Tiles } from "./GridBg";

export const AnimatedGridBackgroundSection: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className={"relative  min-h-[100vh] overflow-hidden  "}>
      <div className={"relative z-[2] h-fit w-fit"}>{children}</div>
      <div className={"absolute bottom-0 left-0 h-full"}>
        <Tiles rows={52} cols={40} />
      </div>
    </div>
  );
};
