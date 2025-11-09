import React from "react"

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl shadow p-6 border border-green-100 ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = "" }) {
  return <div className={`mb-2 font-bold text-green-700 text-lg ${className}`}>{children}</div>
}

export function CardContent({ children, className = "" }) {
  return <div className={`text-slate-700 ${className}`}>{children}</div>
}

export function CardFooter({ children, className = "" }) {
  return <div className={`mt-4 text-right ${className}`}>{children}</div>
}
