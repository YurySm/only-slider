import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FakeDataItem } from 'shared/lib/fakeData';

interface CircleDistributionProps {
    elements: FakeDataItem[]
    radius: number
    offsetAngle: number
    activeIndex: number
}

const CircleDistribution = ({ elements, radius, offsetAngle, activeIndex }: CircleDistributionProps) => {
    const centerX = 200;
    const centerY = 200;
    const elementRefs = useRef([]); // Ссылки на элементы

    const [sortedArray, setSortedArray] = useState<FakeDataItem[]>(elements);

    const shiftArray = (startIndex: number) => {
        // Разделяем массив на две части: до startIndex и после
        const firstPart = sortedArray.slice(startIndex); // Элементы с startIndex до конца
        const secondPart = sortedArray.slice(0, startIndex); // Элементы с начала до startIndex

        // Объединяем части
        const newArray = firstPart.concat(secondPart);
        setSortedArray(newArray);
    };

    useEffect(() => {
        elementRefs.current.forEach((el, index) => {
            let num =  0 ;
            if(activeIndex === index) {
                num = 1
            }
            if ( activeIndex > index ) {
                num = index - activeIndex
            } else {
                num = index + activeIndex
            }

            const angle = (2 * Math.PI * index) / sortedArray.length + offsetAngle;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            gsap.to(el, {
                x: x - centerX,
                y: y - centerY,
                duration: 1,
                ease: 'power2.out',
            });
        });
    }, [sortedArray, activeIndex]);

    useEffect(() => {
        shiftArray(activeIndex)
    }, [activeIndex])


    return (
        <div style={{ position: 'relative', width: '400px', height: '400px' }}>
            {sortedArray.map((element, index) => (
                <div
                    key={ index }
                    // @ts-ignore
                    ref={ (el) => (elementRefs?.current[index] = el) }
                    style={{
                        position: 'absolute',
                        left: `${centerX}px`,
                        top: `${centerY}px`,
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'lightblue',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                    }}
                >
                    {element.title}
                </div>
            ))}
        </div>
    );
};

export default CircleDistribution;