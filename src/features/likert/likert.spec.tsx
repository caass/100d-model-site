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
    return rawIcons[0] === rawIcons[1] ? [] : rawIcons;
  };

  const icons: string[] = axes.flatMap((val) => {
    return isGroup(val) ? [] : getEndpointIcons(val);
  });

  const iconsSet = Array.from(new Set(icons));

  expect(icons).toStrictEqual(iconsSet);
});
