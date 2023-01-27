import React from 'react'



export const buildMenuItem = (key,label, component, children, type)=>{
const {colorInfo}= useTheme()

  return {
          key,
          icon:component,
          children,
          label,
          type,
          // danger:'danger',
          style:{
            '&:hover':{
              backgroundColor:colorInfo
            }
          }
        };
      }