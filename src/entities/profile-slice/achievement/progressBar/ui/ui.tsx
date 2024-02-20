import { AchievementProgressBarCircle } from "@/shared/ui/profile-slice/progressBarCircle";

export const AchievementProgressBar = ({
    currentValue,
    maxValue,
}: {
    currentValue: number;
    maxValue: number;
}) => {
    return (
        <>
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '1.75rem',
                    background:
                        'linear-gradient(340.48deg, rgba(186, 214, 177, 0.2) 9.32%, rgba(186, 214, 177, 0.2) 83.24%)',
                    borderRadius: '1.5rem',
                    padding: '0.125rem',
                }}>
                <div
                    style={{
                        background:
                            'linear-gradient(269.84deg, rgba(115, 174, 98, 1) 2.96%, rgba(186, 214, 177, 1) 96.87%)',
                        width: `${(currentValue / maxValue) * 100}%`,
                        height: '100%',
                        borderRadius: '1.5rem',
                    }}></div>
                <div
                    style={{
                        position: 'absolute',
                        top: '0.125rem',
                        width:
                            currentValue / maxValue <= 0.1
                                ? '30%'
                                : currentValue / maxValue <= 0.5
                                ? `${(currentValue / maxValue) * 100 + 15}%`
                                : `${
                                      (currentValue / maxValue) * 100 -
                                      (currentValue == maxValue ? 0 : 5)
                                  }%`,
                        lineHeight: '1.5rem',
                        color: '#BAD6B1',
                        textAlign: currentValue == maxValue ? 'center' : 'end',
                    }}>{`${currentValue}/${maxValue}`}</div>
                <AchievementProgressBarCircle
                    value={currentValue}
                    style={{ left: '0.125rem', top: '0.125rem' }}
                />
                <AchievementProgressBarCircle
                    value={maxValue}
                    style={{ right: '0.125rem', bottom: '0.125rem', opacity: '50%' }}
                />
            </div>
        </>
    );
};
