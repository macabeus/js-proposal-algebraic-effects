value |> do {
  try { JSON.parse(#); }
  catch (error) { console.error(error); }
  finally { something(); }
}
