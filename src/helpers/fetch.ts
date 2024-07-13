export async function getApi(path: string) {
  try {
    const response: Response = await fetch(path);
    const data = await response.json();
    if (!data) {
      throw new Error('Network Fail');
    } else {
      return data;
    }
  } catch {
    alert('Error inesperado.');
  }
}

export async function deleteApi(path: string) {
  const options = {
    method: 'DELETE',
  };
  try {
    const response: Response = await fetch(path, options);
    if (!response.ok) {
      throw new Error('Network Fail');
    }
  } catch {
    alert('Error inesperado.');
  }
}

export async function postApi(path: string, user: IUser) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  try {
    const response: Response = await fetch(path, options);
    if (!response.ok) {
      throw new Error('Network Fail');
    }
  } catch {
    alert('Error inesperado.');
  }
}

export async function putApi(path: string, user: IUser) {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };
  try {
    const response: Response = await fetch(path, options);
    if (!response.ok) {
      throw new Error('Network Fail');
    }
  } catch {
    alert('Error inesperado.');
  }
}
