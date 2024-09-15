import {routes} from "constants/routes";
import {Route, Routes} from "react-router-dom";

export function AppRouting() {
  return (
    <Routes>
      {routes.map(({path, component: Component}) => (
        <Route key={path} element={<Component />} path={path} />
      ))}
    </Routes>
  );
}
