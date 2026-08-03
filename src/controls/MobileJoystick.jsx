import { useEffect, useRef } from "react";
import nipplejs from "nipplejs";

export default function MobileJoystick({ joystick }) {
  const zone = useRef(null);

  useEffect(() => {
    const joystickManager = nipplejs.create({
      zone: zone.current,
      mode: "static",
      position: { left: "70px", bottom: "70px" },
      color: "white",
      size: 120,
    });

    joystickManager.on("move", (event) => {
        console.log("MOVE DATA:", event);

        const data = event.data;

        if (!data || !data.angle) return;

        const angle = data.angle.radian;
        const force = Math.min(data.force || 1, 1);

        joystick.current.x = Math.cos(angle) * force;
        joystick.current.y = Math.sin(angle) * force;

        console.log("JOYSTICK:", {
            x: joystick.current.x,
            y: joystick.current.y,
        });
    });

    joystickManager.on("end", () => {
      joystick.current.x = 0;
      joystick.current.y = 0;

      console.log("Stop");
    });

    return () => {
      joystickManager.destroy();
    };
  }, [joystick]);

  return (
    <div
      ref={zone}
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: 180,
        height: 180,
        zIndex: 100,
      }}
    />
  );
}