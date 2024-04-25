/* eslint-disable react/no-unescaped-entities */
import "../bien-etre.scss";
export default function SurveillerSonAlimentation() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold text-center mb-8 titleOne">
        {" "}
        Optez pour une Alimentation Consciente : Les Clés d'une Vie Saine et
        Équilibrée
      </h1>
      <p className="text-lg text-justify mb-8">
        Dans un monde où le rythme effréné peut nous éloigner de l'essentiel, il
        est crucial de faire preuve de vigilance à l'égard de notre
        alimentation. Les conséquences d'une nourriture négligée sur notre santé
        sont nombreuses, mais les avantages d'une alimentation consciente sont
        tout aussi impressionnants. Découvrez comment surveiller votre assiette
        peut transformer votre bien-être physique et mental.
      </p>

      <h2 className="text-2xl font-bold mb-4">
        Les conséquences d'une alimentation négligée :
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-2">Problèmes de santé majeurs</h3>
          <p className="text-lg">
            Une alimentation déséquilibrée est souvent associée à des problèmes
            de santé tels que l'obésité, le diabète de type 2, les maladies
            cardiovasculaires et d'autres affections métaboliques. Ces
            conditions peuvent considérablement diminuer la qualité de vie et
            entraîner des coûts de santé élevés.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">
            Baisse d'énergie et de productivité
          </h3>
          <p className="text-lg">
            Les aliments transformés riches en sucres simples peuvent entraîner
            des pics d'énergie suivis de chutes abruptes, laissant les individus
            fatigués et moins concentrés. Une alimentation équilibrée, en
            revanche, fournit un approvisionnement constant en énergie,
            favorisant une productivité optimale tout au long de la journée.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">
            Impact sur la santé mentale{" "}
          </h3>
          <p className="text-lg">
            Des recherches ont établi des liens entre une alimentation
            déséquilibrée et des problèmes de santé mentale tels que l'anxiété
            et la dépression. Les nutriments contenus dans une alimentation
            équilibrée jouent un rôle essentiel dans le soutien du bien-être
            émotionnel.
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">
        Les avantages d'une alimentation consciente :
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-2">Meilleure santé physique</h3>
          <p className="text-lg">
            En choisissant des aliments riches en nutriments essentiels, vous
            renforcez votre système immunitaire, améliorez la santé de votre
            cœur et réduisez le risque de maladies chroniques. Une alimentation
            équilibrée contribue également à maintenir un poids corporel
            optimal.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Énergie durable</h3>
          <p className="text-lg">
            {" "}
            Les aliments riches en protéines, en fibres et en glucides complexes
            fournissent une énergie soutenue tout au long de la journée,
            favorisant une productivité constante et un bien-être général.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">
            Meilleur équilibre émotionnel
          </h3>
          <p className="text-lg">
            Des études ont montré que certains nutriments, tels que les acides
            gras oméga-3, peuvent avoir un impact positif sur la santé mentale.
            En privilégiant une alimentation équilibrée, vous favorisez une
            stabilité émotionnelle et une résilience accrue face au stress.
          </p>
        </div>
      </div>
      <p></p>
    </section>
  );
}
