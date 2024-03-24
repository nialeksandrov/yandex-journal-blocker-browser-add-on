const class_name_to_remove = "body__content";
const tags_to_remove = document.getElementsByClassName(class_name_to_remove);
for (let i = 0; i < tags_to_remove.length; i++) {
  tags_to_remove[i].parentNode.removeChild(tags_to_remove[i])
}   