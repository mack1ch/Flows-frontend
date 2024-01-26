import { Typography } from "antd"
import { CSSProperties } from "react"

export const AchievementProgressBarCircle = ({ style, value }: { style: CSSProperties, value: number }) => {
    return (
        <>
            <Typography.Text style={{
                position: "absolute",
                width: "1.5rem",
                height: "1.5rem",
                zIndex: 1,
                textAlign: "center",
                lineHeight: "1.5rem",
                fontSize: "1rem",
                color: "#449429",
                ...style,
            }}>
                {value}
            </Typography.Text>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none" style={{
                position: "absolute",
                width: "1.5rem",
                height: "1.5rem",
                flexShrink: 0,
                ...style
            }}>
                <circle cx="8" cy="8" r="6.50813" fill="url(#paint0_linear_69_155)" stroke="url(#paint1_linear_69_155)" strokeWidth="2.98375" />
                <defs>
                    <linearGradient id="paint0_linear_69_155" x1="10.3022" y1="16" x2="5.25594" y2="1.76894" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#73AE62" />
                        <stop offset="1" stopColor="#BAD6B1" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_69_155" x1="15.5695" y1="16" x2="0.502361" y2="16.0424" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#73AE62" />
                        <stop offset="1" stopColor="#BAD6B1" />
                    </linearGradient>
                </defs>
            </svg>
        </>
    )
}