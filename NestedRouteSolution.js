The problem can be reliably solved by using the `useLocation` hook to explicitly access the URL parameters. The `useLocation` hook provides more reliable access to the URL information, irrespective of route rendering order or lazy-loading.  This ensures the parameters are always available.

```javascript
import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get('userId'); // Or extract from location.pathname
  // ... rest of your component
}
```

This approach ensures that the parameters are available even when navigating directly to a nested route.  This method bypasses the dependency on the `useParams` hook which is problematic in this scenario.