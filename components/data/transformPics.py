from PIL import Image
import os
import json
import blurhash
import numpy as np

with open('pics_raw.json', 'r', encoding='utf-8') as f:
  data = json.load(f)

images = {}

for key in data.keys():
  # If thumbs doesn't exist, create it
  if not os.path.exists(f"../../public/img/gallery_thumbs/{key}"):
    os.makedirs(f"../../public/img/gallery_thumbs/{key}")

  images[key] = []

  num_items = len(data[key])

  for i in range(num_items):
    img_path = f"../../public/img/gallery_full/{key}/Bild ({i + 1}).jpg"
    thumb_path = img_path.replace("gallery_full", "gallery_thumbs")

    img = Image.open(img_path)

    width = img.width
    height = img.height

    # check if image is rotated with exif data
    try:
      exif = img._getexif()
      orientation = exif[274]
      if orientation == 6:
        width, height = height, width
    except:
      pass


    alt = data[key][i]

    if not os.path.exists(thumb_path):
      img.thumbnail((400, 400))
      img.save(thumb_path)

    # ToDo!
    img.thumbnail((100,100))
    img_hash = blurhash.encode(np.array(img))

    images[key].append({"width": width, "height": height, "alt": alt, "index": i, "blurhash": img_hash})

    print(key, i)

with open('pics.json', 'w') as f:
  json.dump(images, f)
