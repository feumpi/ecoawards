import Header from "../layout/Header";

const Sustentabilidade = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Header
          title="Sustentabilidade"
          description="Aprender nunca é demais! 🎓"
          back
        />

        <div className="bg-primary w-full rounded-lg text-white p-4">
          <p className="text-lg font-bold">Artigo de hoje</p>
          <p className="text-3xl ">Microplásticos</p>
        </div>

        <div className="bg-gray-200 border border-gray-300 text-justify rounded-lg p-4 flex flex-col gap-2 text-sm">
          <p>
            Os microplásticos são pequenas partículas de plástico, geralmente
            com menos de 5 milímetros de diâmetro, que estão cada vez mais
            presentes no ambiente. Eles podem ser divididos em dois tipos: os
            microplásticos primários, que são intencionalmente produzidos em
            tamanhos pequenos, como os encontrados em produtos de higiene
            pessoal, e os microplásticos secundários, que resultam da degradação
            de plásticos maiores devido à exposição a fatores ambientais como
            luz solar, calor e ação mecânica.
          </p>

          <p>
            A presença de microplásticos no meio ambiente é um problema
            crescente, especialmente nos oceanos, onde são ingeridos por
            organismos marinhos. Isso pode causar danos físicos e químicos aos
            animais, afetando toda a cadeia alimentar, incluindo os seres
            humanos. Além disso, os microplásticos podem atuar como vetores de
            poluentes químicos, amplificando os impactos ambientais negativos.
          </p>

          <p>
            A preocupação com os microplásticos também se estende à saúde
            humana, pois essas partículas podem entrar na cadeia alimentar e
            eventualmente serem consumidas por pessoas. Estudos têm mostrado a
            presença de microplásticos em alimentos e água potável, levantando
            questões sobre os possíveis efeitos à saúde.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sustentabilidade;
