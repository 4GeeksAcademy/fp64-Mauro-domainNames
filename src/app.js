const getPronounAdjectiveList = () => {
  let state = [];
  const pronounList = ["the", "our"];
  const adjectiveList = ["big", "great"];
  return pronounList.reduce((state, pronoun) => {
    adjectiveList.forEach((adjective) => {
      state = [...state, `${pronoun}${adjective}`];
    });
  return state;  
}, []);
};

const getPronounAdjectiveNounList = (pronounAdjectiveList) => {
  const nounList = ["jogger", "racoon"];
  const domainList = [".com", ".net"];
  return pronounAdjectiveList.reduce((state, pronounAdjective) => {
    nounList.forEach((noun) => {
      domainList.forEach((domain) => {
        state = [...state, `${pronounAdjective}${noun}${domain}`];
      });
    });
    return state;
  }, []);
};

const printPronounAdjectiveNounList = (pronounAdjectiveList) => {
  pronounAdjectiveList.forEach(pronounAdjectiveNoun => {
    console.log(pronounAdjectiveNoun);
  });
};

function main() {
  const pronounAdjectiveList = getPronounAdjectiveList();
  const pronounAdjectiveNounList = getPronounAdjectiveNounList(
    pronounAdjectiveList
  );
  printPronounAdjectiveNounList(pronounAdjectiveNounList);
}

main();