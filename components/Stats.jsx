'use client';

import CountUp from "react-countup";

const stats = [
  {
    num: 12,
    text: 'Years of Experience',
  },
  {
    num: 3,
    text: 'ERP Projects Delivered',
  },
  {
    num: 2,
    text: 'Countries Served',
  },
  {
    num: 4,
    text: 'Industries Covered',
  }
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={4}
                  delay={1.5}
                  className="text-4xl xl:text-6xl font-extrabold text-primary"
                />
                <p className="text-muted-foreground font-medium">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
