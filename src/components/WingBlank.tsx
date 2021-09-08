import { ReactNode } from "react";

const WingBlank = ({ className, children }: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={className}
      style={{
        padding: '0 20px'
      }}
    >
      {children}
    </div>
  )
}

export default WingBlank