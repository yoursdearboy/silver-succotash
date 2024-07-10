export const index = () => fetch(`/api/persons/`);

export const find = (id) => fetch(`/api/persons/${id}`);

export const create = async (data) => {
  const res = await fetch(`/api/persons`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.detail);
  return json;
};

export const update = async (id, data) => {
  const res = await fetch(`/api/persons/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.detail);
  return json;
};

export const delete_ = async (id) => {
  const res = await fetch(`/api/persons/${id}`, {
    method: "DELETE",
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.detail);
  return json;
};
