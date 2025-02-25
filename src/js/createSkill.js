/*  author Chalykh Maksim 
  # data 05.02.2025 
  # email: chalyh.maksim.88@mail.ru */

export function createSkill (skillName, skillNameAll, maxLevel, skillImg) { 
  const skillDiv = document.createElement('div');  
  skillDiv.className = 'skill';  
  skillDiv.id = skillName;  

  const img = document.createElement('img');  
  img.src = skillImg; 
  img.alt = skillNameAll;  
  img.className = 'skill-img'; 

  const skillBlock = document.createElement('div');  
  skillBlock.className = 'skill-block';  

  const skillNameBlock = document.createElement('div');  
  skillNameBlock.className = 'skill-name-block';  
  const nameParagraph = document.createElement('p');  
  nameParagraph.className = 'skill-name';  
  nameParagraph.textContent = skillNameAll;  

  skillNameBlock.appendChild(nameParagraph);

  const skillProgress = document.createElement('div');  
  skillProgress.className = 'skill-progress';  
  const lineDiv = document.createElement('div');  
  lineDiv.className = 'line';  
  const dotSum = document.createElement('div');
  dotSum.className = 'dot_sum';
  dotSum.nextContent = '0';

  skillProgress.appendChild(dotSum);

  for (let i = 0; i < maxLevel; i++) {  
      const dot = document.createElement('div');  
      dot.className = 'dot';  
      lineDiv.appendChild(dot);  
  }  
  
  skillProgress.appendChild(lineDiv);  
  skillProgress.appendChild(document.createElement('div')).className = 'dot-reset';  
  skillBlock.appendChild(skillNameBlock);  
  skillBlock.appendChild(skillProgress);  
  skillDiv.appendChild(img);  
  skillDiv.appendChild(skillBlock); 
  
  return skillDiv;
}  


/*  author Chalykh Maksim 
  # data 05.02.2025 
  # email: chalyh.maksim.88@mail.ru */
