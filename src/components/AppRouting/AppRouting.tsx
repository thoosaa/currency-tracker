import {BrowserRouter, Route, Routes} from "react-router-dom";

import {routes} from "constants/routes";

export function AppRouting() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({path, component: Component}) => (
          <Route key={path} element={<Component />} path={path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
