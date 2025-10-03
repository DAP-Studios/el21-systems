import os

# Path to your products folder
folder = "src/assets/products"

# Mapping of old names → new names
rename_map = {
    "temprature controller.jpg": "temperature-controller.jpg",
    "length counter.jpg": "length-counter.jpg",
    "lengthcounter2.jpg": "length-counter-2.jpg",
    "pi4911aw-processindicator.jpg": "pi4911aw-process-indicator.jpg",
    "pillowblockbearing.jpg": "pillow-block-bearing.jpg",
    "proximitysensor.jpg": "proximity-sensor.jpg",
    "proximitysensor2.jpg": "proximity-sensor-2.jpg",
    "sequentialmeter.jpg": "sequential-meter.jpg",
    "sequentialmeter2.jpg": "sequential-meter-2.jpg",
    "serqentialmeter3.jpg": "sequential-meter-3.jpg",   # typo fix
    "smps.jpg": "smps.jpg",   # unchanged
    "speedcindicator.jpg": "speed-indicator.jpg",       # typo fix
    "staticchargeremoval.jpg": "static-charge-removal.jpg",
    "sync-card.jpg": "sync-card.jpg",   # unchanged
    "synccard.jpg": "sync-card-1.jpg",
    "synccard2.jpg": "sync-card-2.jpg",
    "variable-freq-driver.jpg": "variable-freq-driver.jpg",  # unchanged
    "variable-freq-driver2.jpg": "variable-freq-driver-2.jpg"
}

# Perform renaming
for old_name, new_name in rename_map.items():
    old_path = os.path.join(folder, old_name)
    new_path = os.path.join(folder, new_name)
    if os.path.exists(old_path):
        os.rename(old_path, new_path)
        print(f"✅ Renamed: {old_name} → {new_name}")
    else:
        print(f"⚠️ File not found: {old_name}")

print("\n🎉 Renaming complete!")
