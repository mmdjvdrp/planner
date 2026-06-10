export function load(k, def){
 ...
}

export function save(k, v){
 ...
}

export async function saveCloud(){
 ...
}

export async function loadCloud(){
 ...
}

function load(k, def){ try{ const v=localStorage.getItem(k); return v?JSON.parse(v):def; }catch{return def;} }
function save(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch{} }

async function saveCloud(){

  if(!window.auth.currentUser) return;

  const data = {
    events,
    cats,
    liveSession,
    theme
  };

  await window.fbSet(
    window.fbRef(
      window.db,
      "users/" + window.auth.currentUser.uid + "/plannerData"
    ),
    data
  );

}

async function loadCloud(){

 const snap = await window.fbGet(
  window.fbRef(
    window.db,
    "users/" + auth.currentUser.uid + "/plannerData"
  )
);
