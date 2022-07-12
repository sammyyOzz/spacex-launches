import React from 'react';
import './layout.styles.css'


export interface LayoutProps {
    children: React.ReactNode
}


export function Layout({ children }: LayoutProps) {

    return (
        <div className="layout">
            <div className="layout__gutter" />
            
            <div className="layout__body">
                <h1 className="layout__title">Space-X Launches</h1>

                { children }
            </div>

            <div className="layout__gutter" />
        </div>
    )
}