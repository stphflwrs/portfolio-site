const fetchMarkdown = async (path: string): Promise<string> => {
  const markdownPrefix: string = 'data/md/';
  const markdownExtension: string = '.md';

  let filename: string = markdownPrefix + path + markdownExtension;
  const response: Response = await fetch(filename);
  return response.text();
};

export { fetchMarkdown };
