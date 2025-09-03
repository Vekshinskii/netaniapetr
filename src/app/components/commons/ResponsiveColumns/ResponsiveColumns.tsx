'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './ResponsiveColumns.module.css';

type Docs = {
    header_one: string;
    header_two: string;
    first_par?: string;
    sec_par?: string;
    third_par?: string;
    article_one: string[];
    article_two: string[];
};

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

const Col: React.FC<{
    className?: string;
    title: string;
    p1?: string;
    list: string[];
    p2?: string;
}> = ({ title, p1, list, p2 }) => (
    <div className={styles.res_col}>
        <h3>{title}</h3>
        {p1 && <p>{p1}</p>}
        <ul>{list.map((li, i) => <li key={i}>{li}</li>)}</ul>
        {p2 && <p>{p2}</p>}
    </div>
);

export default function ResponsiveColumns({ docs }: { docs: Docs }) {
    const isMobile = useIsMobile(678);

    if (isMobile) {
        const isRTL = typeof document !== 'undefined' && document?.dir === 'rtl';
        return (
            <div className={"styles.responsive_col_wrapper" + " slider_wrapper"}>
                <button className="docs-prev" aria-label="Назад" />
                <button className="docs-next" aria-label="Вперёд" />
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    slidesPerView={1}
                    spaceBetween={16}
                    navigation={{ prevEl: '.docs-prev', nextEl: '.docs-next' }}
                    pagination={{ clickable: true }}
                    dir={isRTL ? 'rtl' : 'ltr'}
                    autoHeight
                    observer
                    observeParents
                >
                    <SwiperSlide>
                        <Col
                            title={docs.header_one}
                            p1={docs.first_par}
                            list={docs.article_one}
                            p2={docs.sec_par}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Col
                            title={docs.header_two}
                            p1={docs.third_par}
                            list={docs.article_two}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        );
    }
    return (
        <div className={styles.responsive_col_wrapper}>
            <Col
                title={docs.header_one}
                p1={docs.first_par}
                list={docs.article_one}
                p2={docs.sec_par}
            />
            <Col
                title={docs.header_two}
                p1={docs.third_par}
                list={docs.article_two}
            />
        </div>
    );
}
