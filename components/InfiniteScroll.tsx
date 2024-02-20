import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const InfiniteScroll = () => {
  const images = [
    {
      name: "contentful",
      img: "https://images.ctfassets.net/w6r2i5d8q73s/19qFNu9U2mSevNXUtiPBfN/1ac215d9995bfcba45f7cf461302820a/contentful.svg",
    },
    {
      name: "ubisoft",
      img: "https://images.ctfassets.net/w6r2i5d8q73s/3YZJ2vkIzuHgZJO2Dcxh5e/5666399b331fd03327d027121ae5d85a/ubisoft.svg",
    },
    {
      name: "pepsico",
      img: "https://images.ctfassets.net/w6r2i5d8q73s/6EFWQKfOYbpTv43Hm84p0t/600efe08eea24d50568e0ec41ce19c07/pepsico.svg",
    },
    {
      name: "macys",
      img: "https://images.ctfassets.net/w6r2i5d8q73s/7r3aM4IuiXRmsiIc77h2qK/dd1f9862bcbe74d39635b9465be9945e/macys.svg",
    },
    {
      name: "whirlpool",
      img: "https://images.ctfassets.net/w6r2i5d8q73s/pJfdnxHOM7YsJlmNyhuBv/ec04483e170ae6df33fd4d314a5dbb60/whirlpool.svg",
    },
    {
      name: "hanes",
      img: "https://images.ctfassets.net/w6r2i5d8q73s/gBX7PH3LqE6V8twqr2OOw/4fa7020f3152a0695c3a53dc050f31cd/hanes.svg",
    },
    {
      name: "yamaha",
      img: "https://images.ctfassets.net/w6r2i5d8q73s/BtJIlcUVfpe9jzMmMKYqm/45e20b86be185bc049ad0e5138a51f55/yamaha.svg",
    },
    {
      name: "docusign",
      img: "https://images.ctfassets.net/w6r2i5d8q73s/6lBp4DlhJZaNlGqoNdEXsp/4f8e2437c0c54ede8f38e6550382f310/docusign.svg",
    },
    {
      name: "liberty_mutual",
      img: "https://images.ctfassets.net/w6r2i5d8q73s/1QagzRLW8o5mSryN9qN4KX/9c62612ee95f570382bfe4248924468f/liberty_mutual.svg",
    },
    {
      name: "wp_engine",
      img: "https://images.ctfassets.net/w6r2i5d8q73s/4fxqUuWzZ1g7YMh8EFyf64/5054f2a6c219e0c3f6dca9bb5f4ed91b/wp_engine.svg",
    },
    {
      name: "accenture",
      img: "https://images.ctfassets.net/w6r2i5d8q73s/7qqYuOhg1XTnQgadkFNiAI/4ccc945909c01ae4f801ecad10f0bf61/accenture.svg",
    },
    {
      name: "bumble",
      img: "https://images.ctfassets.net/w6r2i5d8q73s/BhL17cEmDGUPTio403hVd/f5b4b37f3d18d356bdfcf0e441322e34/bumble.svg",
    },
    {
      name: "delloite",
      img: "https://images.ctfassets.net/w6r2i5d8q73s/438pyocvf5kV5oXCP6magW/6d8b17095a730118af06c6056ae53d7e/delloite.svg",
    },
    {
      name: "hewlett_packard",
      img: "https://images.ctfassets.net/w6r2i5d8q73s/5sxr5YBvnv2JVPyQhzGUEr/f75d9d3bf08c75ba52070cd085f96d14/hewlett_packard.svg",
    },
    {
      name: "total",
      img: "https://images.ctfassets.net/w6r2i5d8q73s/1nlToYxzQ6hq8RtTZB0e7n/75c6243dcfcbf465bdeee5b13d6a6a92/total.svg",
    },
    {
      name: "dropbox",
      img: "https://images.ctfassets.net/w6r2i5d8q73s/3wvKK3Upra0CHNnMkDqNhd/737d1b75c2b2e6cc481c179f78b50687/dropbox.svg",
    },
    {
      name: "asos",
      img: "https://images.ctfassets.net/w6r2i5d8q73s/8y8TUx9LpVRKbqukOcZC2/9a5321a69701fde64514dd201e3bc992/asos.svg",
    },
  ];
  return (
    <InfiniteMovingCards items={images} pauseOnHover={false} speed="normal" />
  );
};
export default InfiniteScroll;
