import { axes, isGroup, SpectrumAxis } from "./axes";

it("has appropriately long endpoint names", () => {
  const getEndpointLabels = (axis: SpectrumAxis): string[] => {
    return axis.endpoints.map(({ label }) => label);
  };
  const endpointLabels: string[] = axes.flatMap((val) => {
    return isGroup(val)
      ? val.axes.flatMap(getEndpointLabels)
      : getEndpointLabels(val);
  });

  endpointLabels.forEach((label) => {
    // Max word length is 13 chars, max string length is 20 chars
    expect(label).not.toMatch(/((\S{14,})|(^.{20,}))/);
  });
});

it("has unique shortNames", () => {
  const shortNames = axes.flatMap((val) => {
    return isGroup(val)
      ? val.axes.flatMap(({ shortName }) => shortName)
      : val.shortName;
  });

  const shortNamesSet = new Set(shortNames);

  expect(shortNames.length).toBe(shortNamesSet.size);
});

it("has unique icons", () => {
  const getEndpointIcons = (axis: SpectrumAxis): string[] => {
    const rawIcons = axis.endpoints.map(({ icon }) => icon.iconName);
    // allow dupes on the same spectrum -- those are memes
    return rawIcons[0] === rawIcons[1] ? [rawIcons[0]] : rawIcons;
  };

  const icons: string[] = axes.flatMap((val) => {
    return isGroup(val) ? [] : getEndpointIcons(val);
  });

  const iconsSet = Array.from(new Set(icons));

  expect(icons).toStrictEqual(iconsSet);
});

it("has well-formed titles", () => {
  const titles = axes.flatMap((val) => {
    if (isGroup(val)) {
      return [val.label, ...val.axes.map(({ longName }) => longName)];
    } else {
      return val.longName;
    }
  });

  /*
  bad title
  [blanks are ok]
  Good Title
  Also Ok?
  Good/Title
  Bad/title
  Goodtitle
  EXTREMELY good title
  genocide With a Small G is a Good Title
  */

  titles.forEach((t) =>
    expect(t).toMatch(
      /(^$)|(^[A-Z]{1,}[a-z]*(\s.*)?$)|(^([A-Z]{1}[a-z]+\/?){2,})|(^[A-Z]{1}[a-z]*-[A-Z]{1}[a-z]*)|(genocide)/
    )
  );
});
