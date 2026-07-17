// グローバル変数
let ingredients = [];
let recipes = [];

// 食材 JSON を fetch で読み込み
fetch('ingredients.json')
  .then(res => res.json())
  .then(data => {
    ingredients = data;
    renderIngredients(); // チェックボックス表示
  })
  .catch(err => console.error('ingredients.json 読み込みエラー:', err));

// 料理 JSON を fetch で読み込み
fetch('recipe.json')
  .then(res => res.json())
  .then(data => {
    recipes = data.map(r => ({
      bitmask: parseInt(r.bitmask, 2), // JSON の bitmask を整数に変換
      name: r.name,
      time: r.time,
      url: r.url
    }));
  })
  .catch(err => console.error('recipe.json 読み込みエラー:', err));

// チェックボックス表示
function renderIngredients() {
  const container = document.getElementById('ingredientList');
  ingredients.forEach(food => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'food-' + food.id;
    checkbox.value = food.name;

    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = food.name;

    const div = document.createElement('div');
    div.appendChild(checkbox);
    div.appendChild(label);
    container.appendChild(div);
  });
}

// 献立提案ボタン
document.getElementById('btn').addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('#ingredientList input[type="checkbox"]');
  let selectedMask = 0;

  checkboxes.forEach(cb => {
    if(cb.checked){
      const id = parseInt(cb.id.replace('food-', ''));
      selectedMask |= (1 << id);
    }
  });

  const result = document.getElementById('result');
  result.innerHTML = '';

  const possibleRecipes = recipes.filter(r => (r.bitmask & selectedMask) === r.bitmask);

  if(possibleRecipes.length === 0){
    result.innerHTML = '<li>作成可能な料理はありません</li>';
  } else {
    possibleRecipes.forEach(r => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${r.url}" target="_blank">${r.name}</a> (${r.time})`;
      result.appendChild(li);
    });
  }
});