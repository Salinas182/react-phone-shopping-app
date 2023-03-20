import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

export default function BasicBreadcrumbs() {
  const router = useRouter();
  const [device, setDevice] = useState(null);
  const isHomeView = router.asPath === '/';

  useEffect(() => {
    if (!isHomeView) {
      setDevice(localStorage.getItem('device'));
    }
  }, [isHomeView]);

  return (
    <div role="presentation">
      {
        isHomeView ?
          (
            <Link underline="hover" color="inherit" href="/">
              Inicio
            </Link>
          )
          :
          (
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Inicio
              </Link>
              <Typography color="text.primary">{device}</Typography>
            </Breadcrumbs>
          )
      }
    </div>
  );
}
