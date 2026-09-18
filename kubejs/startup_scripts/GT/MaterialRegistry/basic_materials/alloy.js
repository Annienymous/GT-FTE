GTCEuStartupEvents.registry(`gtceu:material`, event => {
    //Stargate Alloy
    event.create(`stargate_alloy`)
        .blastTemp(3600, `mid`, 2048, 1300)
        .ingot()
        .color(0x8eb2ba).secondaryColor(0x355e67).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_SMALL_GEAR)
        .components(`2x titanium`, `1x molybdenum`, `12x steel`, `2x manasteel`);
    //Silicon Carbide
    event.create(`silicon_carbide`)
        .ingot()
        .color(0x5b5b5b).secondaryColor(0x3c4952).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FOIL)
        .components(`silicon`, `carbon`);
    //Flux Fused Naquadahg
    event.create(`flux_fused_naquadah`)
        .ingot()
        .blastTemp(7200, `high`, GTValues.VA[GTValues.LuV], 2400)
        .color(0x373737).secondaryColor(0x111111).iconSet(GTMaterialIconSet.BRIGHT)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROTOR)
        .components(`naquadah`);
})