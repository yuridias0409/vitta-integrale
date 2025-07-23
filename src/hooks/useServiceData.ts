'use client';

import { useState, useEffect } from 'react';
import { servicesData } from '../lib/servicesData';
import { ServiceData } from '../types';

export const useServiceData = (serviceKey: string | undefined) => {
  const [data, setData] = useState<ServiceData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (serviceKey && servicesData[serviceKey]) {
      setData(servicesData[serviceKey]);
    } else {
      setData(null);
    }
    setLoading(false);
  }, [serviceKey]);

  return { data, loading };
};
