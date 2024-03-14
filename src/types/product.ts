// types/ProductCategories.ts

type DigitalCategories = {
    icons: { socialMediaIcons: string[]; businessIcons: string[]; uiIcons: string[] };
    illustrations: { digitalArt: string[]; characterDesign: string[]; landscapes: string[] };
    codingProjects: { webDevelopment: string[]; mobileAppDevelopment: string[]; softwareTools: string[] };
};

type ManufacturedCategories = {
    topWear: {
        plainTshirts: string[]; printedTshirts: string[]; oversizedTshirts: string[];
        sweatshirtsAndHoodies: string[]; jackets: string[]; regularShirts: string[];
        urbanShirts: string[]; kurtas: string[]
    };
    bottomWear: { pajamas: string[]; joggers: string[]; jeans: string[]; cargos: string[] };
    footwear: { sneakers: string[]; formalShoes: string[] };
    accessories: {
        mobileCovers: string[]; backpacks: string[]; laptopSleevesAndBags: string[];
        pouches: string[]; duffleBags: string[]; wallets: string[]
    };
    personalCare: { perfumes: string[] };
    drinkware: { bottles: string[]; cup: string[]; travelFlask: string[] };
    stationery: { notebooks: string[]; planners: string[] };
};

type HandmadeCategories = {
    jewelry: { necklaces: string[]; bracelets: string[]; earrings: string[]; rings: string[]; brooches: string[] };
    clothingAndAccessories: {
        dresses: string[]; tops: string[]; scarves: string[]; hats: string[];
        gloves: string[]; handbagsAndPurses: string[]; handmadeShoes: string[]
    };
    homeDecor: {
        scentedCandles: string[]; decorativeCandles: string[]; handwovenBaskets: string[];
        handcraftedPottery: string[]; handpaintedVases: string[]; paintings: string[]; wallHangings: string[]
    };
    stationeryAndPaperGoods: {
        handmadeGreetingCards: string[]; handboundJournals: string[];
        customizedNotebooks: string[]; handIllustratedCalendars: string[]; paperFlowers: string[]
    };
    toysAndGames: { handmadeStuffedAnimals: string[]; woodenToys: string[]; handsewnDolls: string[]; puzzleGames: string[]; boardGames: string[] };
    beautyAndPersonalCare: { handmadeSoaps: string[]; naturalSkincareProducts: string[]; handpouredCandles: string[]; customPerfumes: string[] };
    artAndCraftSupplies: { handmadePaints: string[]; handdyedFabrics: string[]; uniqueYarns: string[]; customMadeStamps: string[] };
    kitchenAndDining: { handcraftedCeramicPlates: string[]; woodenUtensils: string[]; handpaintedMugs: string[]; quiltedTableRunners: string[] };
    petAccessories: { handknitPetSweaters: string[]; customizedPetCollars: string[]; handsewnPetBeds: string[] };
    techAccessories: { handmadeLaptopSleeves: string[]; artisanPhoneCases: string[]; handstitchedCableOrganizers: string[] };
};

export type { DigitalCategories, ManufacturedCategories, HandmadeCategories };
