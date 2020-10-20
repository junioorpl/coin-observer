async function dynamicImport(name: string): Promise<string> {
  const icon = `${name.toLocaleLowerCase()}.svg`;

  const importedIcon = await import(
    `../../node_modules/cryptocurrency-icons/svg/color/${icon}`
  )
    .then(data => data.default)
    .catch(() =>
      import(
        `../../node_modules/cryptocurrency-icons/svg/color/generic.svg`
      ).then(data => data.default)
    );

  return importedIcon;
}

export { dynamicImport };
