export default function TrustBar() {
  const logos = [
    { name: "Lazada", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuChO-dQREl-Lmp5n0jRPe47QyesD5ZScEE6kLyHpq9Yzh9VYn1h26emc7iu-a338L_eWgaYbTPmIVVLLK6Er8xlXlecbcZW6iUulE6K0dYKwU6xesRMQXFa0H3HHG5dtLs6jZWk-s6iDOz9RtM8gwasyOhX8jF-aZaQ6OjDRO3n2uJGYoklXq9O0q_8ub6UM6GNIJQj7VJfRtoMl5FJchCccHWOFDo_vtd6x7dRLJ6PhK4uOKdYd_R_mNVdpbQUI6AGeZIToUNwvqY" },
    { name: "Generali", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXoNOOuE9mxrXljD_JzruxmRrMDBN8KPqAX61wS7oHdSPh56LAepoaXqwrCj_hSFeHpZ9K_PnB8dkofVinGL8Eh6DkkecgW01mOAixq3sAV089TO5610Lzne16e17SaRlbywTU3rCMUTg8n1cnn3fSyV66TY_cV7ZH8poJZ2s7iVbjWH1G2WljhkPn9rfNhu7DGdfN9jmtpEWJbaBUyqCc1Yfof3iqQvnJTJHRvqgbSxGCXER_lgJCjV113Foqz_oYBrLDqXfBVZU" },
    { name: "Insular Life", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe9mIh7gMNUCThrC94Dyb0o2Absnf60XEUoZ2wbMU0XQz0BXd7aASfddBP3jlsYTX_kC-tVyGdxaUdWBGj518goy7bfvZmdkPplI7XvpSMKLUpbQjFGHk3Xzii9mEvX24EOSo1SIkalBxjFF7DD3-E9xcAP3N9fqvoO_6hgUbloPOjZJYYt-5z90qnwDa-yC2i_7bFK8scwZRi8JpdOyk7NW2vIp-yEV7tuYbHa4UREJqv9PLGp77rL8FYHMkacyPls8tgXjL8dWg" },
    { name: "J&T Express", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAw3b6lylsoaPq7TQc4PlPmn_9PAZC8fBKpHkbExry5Qi0U6HJkXv067A6KMDqHZEOecS4N6L8bmBaiETuL1663jQsammRVwrRhyeXeaZ_vFXSDfm4qXW_gwtnJICiHx4zkkQLw2UemF6vvWF-ckTp-Sp0-uo_DWcMncBwMfTQS2M3Fa19FGSAWfz9oopxhLcAGKJjlON7PG_nijLyOGiB1W1wUVuhz5Hj-sYc4XNJ6bDKSlxVhifLMVhF2vddE24U3nC119_-dRMI" },
    { name: "Medical City", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtv6l3b7tNoy8-ZDyjl_2RmXFpcbaAFTAKjHDu5CVW83imXJvXxNXgFDBOe0kb68uKL6E9nGT9X3pr1uWtZwBVUVm4Sj3aZBYOjxROwMrl97NF7Et_H-RuMlQcun6gcfXB2vyELJ1THxmHQDtFFiuzSfxbR4HNwApFSSuV6_VzZV6-PnlUw-OuV9GVS832JGAsIb1Adv5UKNqeEk6gyZ9fhh4ZwETZZfp3ypGmVJfrOh2849PI-4jAvM5rZMmBXPh_helLtC0GFQQ" }
  ];

  return (
    <section className="py-12 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-10">Trusted By Growing Companies</h2>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-80">
          {logos.map((logo) => (
            <img
              key={logo.name}
              alt={logo.name}
              className="h-8 md:h-10 grayscale hover:grayscale-0 transition duration-300"
              src={logo.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
