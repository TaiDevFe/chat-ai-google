import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import store from './store/app';
import { Provider } from 'react-redux';
import './index.css'
import App from './App.jsx'
import ChatDetail from './pages/ChatDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        index:true,
        element:<Navigate to='/chat/info'/>,    
      },
      {
          path: "/chat/info",
          element: <ChatDetail/>,
      },
      {
        path:'/chat/:id',
        element:<ChatDetail/>
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
