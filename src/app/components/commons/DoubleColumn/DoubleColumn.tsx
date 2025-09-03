'use client';
import React from 'react';
import styles from './DoubleColumn.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface IDoubleColumn {
    header_one: string;
    header_two: string;
    header_three?: string;
    article_one: string[];
    article_two: string[];
    article_three?: string[];
    hasThree?: boolean;
}

function useIsMobile(max = 678) {
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        const mq = window.matchMedia(`(max-width: ${max}px)`);
        const onChange = () => setIsMobile(mq.matches);
        onChange();
        mq.addEventListener?.('change', onChange);
        return () => mq.removeEventListener?.('change', onChange);
    }, [max]);
    return isMobile;
}

const Section: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
    <div className={styles.section}>
        <h3>{title}</h3>
        <ul>
            {items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    </div>
);

const DoubleColumn: React.FC<IDoubleColumn> = ({
                                                   header_one,
                                                   header_two,
                                                   header_three,
                                                   article_one,
                                                   article_two,
                                                   article_three = [],
                                                   hasThree
                                               }) => {
    const isMobile = useIsMobile(678);
    const sections = [
        { title: header_one, items: article_one },
        { title: header_two, items: article_two },
        ...(hasThree ? [{ title: header_three ?? '', items: article_three }] : []),
    ];

    if (isMobile) {
        // Мобильная версия: карусель
        const isRTL = typeof document !== 'undefined' && document?.dir === 'rtl';
        return (
            <div className="slider_wrapper">
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    slidesPerView={1}
                    spaceBetween={16}
                    navigation
                    pagination={{ clickable: true }}
                    autoHeight={true}
                    observer={true}
                    observeParents={true}
                >
                    {sections.map((s, idx) => (
                        <SwiperSlide key={idx}>
                            <Section title={s.title} items={s.items} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }

    // Десктоп/планшет: 2 (или 3) колонки
    return (
        <div className={styles.dbl_col_wrapper}>
            <div className={styles.dbl_col}>
                <Section title={header_one} items={article_one} />
            </div>
            <div className={styles.dbl_col}>
                <Section title={header_two} items={article_two} />
                {hasThree && <Section title={header_three ?? ''} items={article_three} />}
            </div>
        </div>
    );
};

export default DoubleColumn;
