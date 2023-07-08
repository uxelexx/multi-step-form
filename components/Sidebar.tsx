'use client';
import React, { useState } from 'react';
import SidebarStep from './SidebarStep';

type SidebarProps = {
  active: number;
};

const steps = ['Your info', 'Select plan', 'Add-ons', 'Summary'];

export default function Sidebar() {
  const [active, setActive] = useState(1);

  return (
    <div className='w-64 bg-sidebar space-y-6 rounded-xl p-9 bg-no-repeat'>
      {steps.map((step, i) => {
        const isActive = active === i + 1;
        return (
          <SidebarStep
            key={i}
            active={isActive}
            stepInfo={step}
            stepNum={i + 1}
          />
        );
      })}
    </div>
  );
}
