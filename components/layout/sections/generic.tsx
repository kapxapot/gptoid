import { PropsWithChildren } from "react";

interface SectionProps {
  id: string;
  name: string;
  title: string;
}

export const GenericSection = ({id, name, title, children}: PropsWithChildren<SectionProps>) => {
  return (
    <section id={id} className="container lg:w-[50vw] lg:min-w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          {name}
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
};
