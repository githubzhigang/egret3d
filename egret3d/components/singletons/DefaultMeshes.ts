namespace egret3d {

    const _attributesB: gltf.MeshAttributeType[] = [
        gltf.MeshAttributeType.POSITION,
        gltf.MeshAttributeType.NORMAL,
        gltf.MeshAttributeType.TEXCOORD_0,
    ];
    /**
     * 
     */
    export class DefaultMeshes extends paper.SingletonComponent {
        public static AXISES: Mesh;
        public static QUAD: Mesh;
        public static QUAD_PARTICLE: Mesh;
        public static PLANE: Mesh;
        public static CIRCLE_LINE: Mesh;
        public static CUBE: Mesh;
        public static PYRAMID: Mesh;
        public static CYLINDER: Mesh;
        public static SPHERE: Mesh;

        public initialize() {
            super.initialize();

            { // AXISES.
                const mesh = new Mesh(6, 0, [gltf.MeshAttributeType.POSITION, gltf.MeshAttributeType.COLOR_0]);
                mesh._isBuiltin = true;
                mesh.name = "builtin/axises.mesh.bin";
                mesh.glTFMesh.primitives[0].mode = gltf.MeshPrimitiveMode.Lines;
                paper.Asset.register(mesh);
                DefaultMeshes.AXISES = mesh;
                mesh.setAttributes(gltf.MeshAttributeType.POSITION, [
                    0.0, 0.0, 0.0, 1.0, 0.0, 0.0,
                    0.0, 0.0, 0.0, 0.0, 1.0, 0.0,
                    0.0, 0.0, 0.0, 0.0, 0.0, 1.0,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.COLOR_0, [
                    1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0,
                    0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0,
                    0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0,
                ]);
            }

            { // QUAD.
                const mesh = new Mesh(4, 6);
                mesh._isBuiltin = true;
                mesh.name = "builtin/quad.mesh.bin";
                paper.Asset.register(mesh);
                DefaultMeshes.QUAD = mesh;
                mesh.setAttributes(gltf.MeshAttributeType.POSITION, [
                    -0.5, 0.5, 0,
                    -0.5, -0.5, 0,
                    0.5, 0.5, 0,
                    0.5, -0.5, 0,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.NORMAL, [
                    0, 0, 1,
                    0, 0, 1,
                    0, 0, 1,
                    0, 0, 1,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.TANGENT, [
                    1, 0, 0, 1,
                    1, 0, 0, 1,
                    1, 0, 0, 1,
                    1, 0, 0, 1,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.COLOR_0, [
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.TEXCOORD_0, [
                    0, 0,
                    0, 1,
                    1, 0,
                    1, 1,
                ]);
                mesh.setIndices([
                    0, 1, 2, 2, 1, 3,
                ]);
            }

            { // QUAD_PARTICLE.
                const mesh = new Mesh(4, 6);
                mesh._isBuiltin = true;
                mesh.name = "builtin/quad_particle.mesh.bin";
                paper.Asset.register(mesh);
                DefaultMeshes.QUAD_PARTICLE = mesh;
                mesh.setAttributes(gltf.MeshAttributeType.POSITION, [
                    0, 0.5, 0,
                    0, -0.5, 0,
                    1, 0.5, 0,
                    1, -0.5, 0,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.NORMAL, [
                    0, 0, 1,
                    0, 0, 1,
                    0, 0, 1,
                    0, 0, 1,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.TANGENT, [
                    1, 0, 0, 1,
                    1, 0, 0, 1,
                    1, 0, 0, 1,
                    1, 0, 0, 1,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.COLOR_0, [
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.TEXCOORD_0, [
                    0, 0,
                    0, 1,
                    1, 0,
                    1, 1,
                ]);
                mesh.setIndices([
                    0, 1, 2, 2, 1, 3,
                ]);
            }

            { // PLANE.
                const mesh = new Mesh(4, 6);
                mesh._isBuiltin = true;
                mesh.name = "builtin/plane.mesh.bin";
                paper.Asset.register(mesh);
                DefaultMeshes.PLANE = mesh;
                mesh.setAttributes(gltf.MeshAttributeType.POSITION, [
                    -5, 0, 5,
                    -5, 0, -5,
                    5, 0, 5,
                    5, 0, -5,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.NORMAL, [
                    0, 1, 0,
                    0, 1, 0,
                    0, 1, 0,
                    0, 1, 0,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.TANGENT, [
                    1, 0, 0, 1,
                    1, 0, 0, 1,
                    1, 0, 0, 1,
                    1, 0, 0, 1,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.COLOR_0, [
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.TEXCOORD_0, [
                    0, 0,
                    0, 1,
                    1, 0,
                    1, 1,
                ]);
                mesh.setIndices([
                    0, 1, 2, 2, 1, 3,
                ]);
            }

            { // CUBE.
                const mesh = new Mesh(24, 36);
                mesh._isBuiltin = true;
                mesh.name = "builtin/cube.mesh.bin";
                paper.Asset.register(mesh);
                DefaultMeshes.CUBE = mesh;
                mesh.setAttributes(gltf.MeshAttributeType.POSITION, [
                    -0.5, -0.5, -0.5,
                    -0.5, -0.5, 0.5,
                    0.5, -0.5, -0.5,
                    0.5, -0.5, 0.5,
                    -0.5, 0.5, 0.5,
                    -0.5, 0.5, -0.5,
                    0.5, 0.5, 0.5,
                    0.5, 0.5, -0.5,
                    -0.5, -0.5, 0.5,
                    -0.5, 0.5, 0.5,
                    0.5, -0.5, 0.5,
                    0.5, 0.5, 0.5,
                    -0.5, 0.5, -0.5,
                    -0.5, -0.5, -0.5,
                    0.5, 0.5, -0.5,
                    0.5, -0.5, -0.5,
                    0.5, -0.5, -0.5,
                    0.5, -0.5, 0.5,
                    0.5, 0.5, -0.5,
                    0.5, 0.5, 0.5,
                    -0.5, -0.5, 0.5,
                    -0.5, -0.5, -0.5,
                    -0.5, 0.5, 0.5,
                    -0.5, 0.5, -0.5,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.NORMAL, [
                    0, -1, 0,
                    0, -1, 0,
                    0, -1, 0,
                    0, -1, 0,
                    0, 1, 0,
                    0, 1, 0,
                    0, 1, 0,
                    0, 1, 0,
                    0, 0, 1,
                    0, 0, 1,
                    0, 0, 1,
                    0, 0, 1,
                    0, 0, -1,
                    0, 0, -1,
                    0, 0, -1,
                    0, 0, -1,
                    1, 0, 0,
                    1, 0, 0,
                    1, 0, 0,
                    1, 0, 0,
                    -1, 0, 0,
                    -1, 0, 0,
                    -1, 0, 0,
                    -1, 0, 0,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.TANGENT, [
                    -1, 0, 0, 1,
                    -1, 0, 0, 1,
                    -1, 0, 0, 1,
                    -1, 0, 0, 1,
                    1, 0, 0, 1,
                    1, 0, 0, 1,
                    1, 0, 0, 1,
                    1, 0, 0, 1,
                    -1, 0, 0, 1,
                    -1, 0, 0, 1,
                    -1, 0, 0, 1,
                    -1, 0, 0, 1,
                    1, 0, 0, 1,
                    1, 0, 0, 1,
                    1, 0, 0, 1,
                    1, 0, 0, 1,
                    0, 0, 1, 1,
                    0, 0, 1, 1,
                    0, 0, 1, 1,
                    0, 0, 1, 1,
                    0, 0, -1, 1,
                    0, 0, -1, 1,
                    0, 0, -1, 1,
                    0, 0, -1, 1,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.COLOR_0, [
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.TEXCOORD_0, [
                    0, 0,
                    0, 1,
                    1, 0,
                    1, 1,
                    0, 0,
                    0, 1,
                    1, 0,
                    1, 1,
                    1, 1,
                    1, 0,
                    0, 1,
                    0, 0,
                    0, 0,
                    0, 1,
                    1, 0,
                    1, 1,
                    0, 1,
                    1, 1,
                    0, 0,
                    1, 0,
                    0, 1,
                    1, 1,
                    0, 0,
                    1, 0,
                ]);
                mesh.setIndices([
                    0, 1, 2, 2, 1, 3,
                    4, 5, 6, 6, 5, 7,
                    8, 9, 10, 10, 9, 11,
                    12, 13, 14, 14, 13, 15,
                    16, 17, 18, 18, 17, 19,
                    20, 21, 22, 22, 21, 23
                ]);
            }

            { // PYRAMID.
                const mesh = new Mesh(16, 18);
                mesh._isBuiltin = true;
                mesh.name = "builtin/pyramid.mesh.bin";
                paper.Asset.register(mesh);
                DefaultMeshes.PYRAMID = mesh;
                mesh.setAttributes(gltf.MeshAttributeType.POSITION, [
                    -0.5, -1, -0.5,
                    0, 1, 0,
                    0.5, -1, -0.5,
                    0.5, -1, -0.5,
                    0, 1, 0,
                    0.5, -1, 0.5,
                    0.5, -1, 0.5,
                    0, 1, 0,
                    -0.5, -1, 0.5,
                    -0.5, -1, 0.5,
                    0, 1, 0,
                    -0.5, -1, -0.5,
                    -0.5, -1, -0.5,
                    0.5, -1, -0.5,
                    0.5, -1, 0.5,
                    -0.5, -1, 0.5,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.NORMAL, [
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, 0, 0,
                    0, -1, 0,
                    0, -1, 0,
                    0, -1, 0,
                    0, -1, 0,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.TANGENT, [
                    0, 0, 0, 1,
                    0, 0, 0, 1,
                    0, 0, 0, 1,
                    0, 0, 0, 1,
                    0, 0, 0, 1,
                    0, 0, 0, 1,
                    0, 0, 0, 1,
                    0, 0, 0, 1,
                    0, 0, 0, 1,
                    0, 0, 0, 1,
                    0, 0, 0, 1,
                    0, 0, 0, 1,
                    0, 0, 0, 1,
                    0, 0, 0, 1,
                    0, 0, 0, 1,
                    0, 0, 0, 1,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.COLOR_0, [
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                    1, 1, 1, 1,
                ]);
                mesh.setAttributes(gltf.MeshAttributeType.TEXCOORD_0, [
                    0, 0,
                    0.5, 0.5,
                    0, 1,
                    0, 1,
                    0.5, 0.5,
                    1, 1,
                    1, 1,
                    0.5, 0.5,
                    1, 0,
                    1, 0,
                    0.5, 0.5,
                    0, 0,
                    0, 0,
                    1, 0,
                    1, 1,
                    0, 1,
                ]);
                mesh.setIndices([
                    0, 2, 1, 3, 5, 4,
                    6, 8, 7, 9, 11, 10,
                    12, 14, 13, 15, 14, 12
                ]);
            }

            { // SPHERE.
                const mesh = DefaultMeshes.createSphereCCW();
                mesh._isBuiltin = true;
                mesh.name = "builtin/sphere.mesh.bin";
                paper.Asset.register(mesh);
                DefaultMeshes.SPHERE = mesh;
            }

            { // CYLINDER.
                const mesh = DefaultMeshes.createCylinderCCW();
                mesh._isBuiltin = true;
                mesh.name = "builtin/cylinder.mesh.bin";
                paper.Asset.register(mesh);
                DefaultMeshes.CYLINDER = mesh;
            }
        }

        public static createCylinderCCW(height: number = 1.0, radius: number = 0.5, segment = 20) {
            let index = 0;
            const normal = new Vector3(0.0, 1.0, 0.0);
            const mesh = new Mesh(4 * segment + 2, 3 * 4 * segment, _attributesB);
            const vertices = mesh.getVertices() as Float32Array;
            const uvs = mesh.getUVs() as Float32Array;
            const normals = mesh.getNormals() as Float32Array;
            const indices = mesh.getIndices() as Uint16Array;

            for (let s = 0; s < 4; s++) {
                const y = (s < 2 ? 0.5 : -0.5) * height;

                if (s === 3) {
                    normal.x = 0.0;
                    normal.y = -1.0;
                    normal.z = 0.0;
                }

                for (let i = 0; i < segment; i++) {
                    const r = i / segment * Math.PI * 2.0;
                    const x = Math.sin(r);
                    const z = Math.cos(r);

                    if (s === 1 || s === 2) {
                        normal.x = x;
                        normal.y = 0.0;
                        normal.z = z;
                    }

                    vertices[index * 3] = x * radius;
                    vertices[index * 3 + 1] = y;
                    vertices[index * 3 + 2] = z * radius;

                    normals[index * 3] = normal.x;
                    normals[index * 3 + 1] = normal.y;
                    normals[index * 3 + 2] = normal.z;

                    if (s === 0 || s === 3) {
                        uvs[index * 2] = x * 0.5 + 0.5;
                        uvs[index * 2 + 1] = z * 0.5 + 0.5;
                    }
                    else {
                        uvs[index * 2] = i / segment;
                        uvs[index * 2 + 1] = y < 0.0 ? 0.0 : 1.0;
                    }

                    index++;
                }
            }

            // Top
            vertices[index * 3] = 0.0;
            vertices[index * 3 + 1] = 0.5 * height;
            vertices[index * 3 + 2] = 0.0;

            normals[index * 3] = normal.x;
            normals[index * 3 + 1] = normal.y;
            normals[index * 3 + 2] = normal.z;


            mesh.setAttributes(gltf.MeshAttributeType.POSITION, vertices);
            mesh.setAttributes(gltf.MeshAttributeType.NORMAL, normals);
            mesh.setAttributes(gltf.MeshAttributeType.TEXCOORD_0, uvs)

            index = 0;
            const iTop = 4 * segment;
            const iBottom = 4 * segment + 1;
            mesh.setAttributes(gltf.MeshAttributeType.POSITION, vertices);
            mesh.setAttributes(gltf.MeshAttributeType.NORMAL, normals);
            mesh.setAttributes(gltf.MeshAttributeType.TEXCOORD_0, uvs)
            for (let i = 0; i < segment; i++) {
                // Top
                indices[index++] = iTop;
                indices[index++] = i === segment - 1 ? segment * 0 + 0 : segment * 0 + i + 1;
                indices[index++] = segment * 0 + i + 0;

                // Bottom
                indices[index++] = iBottom;
                indices[index++] = segment * 3 + i + 0;
                indices[index++] = i === segment - 1 ? segment * 3 + 0 : segment * 3 + i + 1;

                // Side
                const t = segment * 1 + i;
                const t2 = i === segment - 1 ? segment * 1 + 0 : segment * 1 + i + 1;
                const b = segment * 2 + i;
                const b2 = i === segment - 1 ? segment * 2 + 0 : segment * 2 + i + 1;
                indices[index++] = t;
                indices[index++] = t2;
                indices[index++] = b;
                indices[index++] = t2;
                indices[index++] = b2;
                indices[index++] = b;
            }

            return mesh;
        }

        public static createSphereCCW(radius: number = 0.5, widthSegments: number = 24, heightSegments: number = 12) {
            widthSegments = Math.max(3, Math.floor(widthSegments));
            heightSegments = Math.max(2, Math.floor(heightSegments));
            const mesh = new Mesh((widthSegments + 1) * (heightSegments + 1), widthSegments * heightSegments * 6 - 6, _attributesB);
            //
            let index = 0;
            const vertex = new Vector3();
            const normal = new Vector3();
            const grid = new Array<number[]>();
            const vertices: number[] = []
            const normals: number[] = []
            const uvs: number[] = []

            for (let iy = 0; iy <= heightSegments; iy++) {
                const verticesRow = new Array<number>();
                const v = iy / heightSegments;

                for (let ix = 0; ix <= widthSegments; ix++) {
                    const u = ix / widthSegments;
                    // Vertex.
                    vertex.x = -radius * Math.cos(u * Math.PI * 2) * Math.sin(v * Math.PI);
                    vertex.y = radius * Math.cos(v * Math.PI);
                    vertex.z = radius * Math.sin(u * Math.PI * 2) * Math.sin(v * Math.PI);
                    vertices.push(vertex.x, vertex.y, vertex.z)

                    // Normal.
                    normal.x = vertex.x;
                    normal.y = vertex.y;
                    normal.z = vertex.z;
                    const num = Math.sqrt(normal.x * normal.x + normal.y * normal.y + normal.z * normal.z);

                    if (num > Number.MIN_VALUE) {
                        normals.push(normal.x / num, normal.y / num, normal.z / num)
                    }
                    else {
                        normals.push(0.0, 0.0, 0.0)
                    }
                    uvs.push(0, 1.0 - u, v)
                    verticesRow.push(index++);
                }

                grid.push(verticesRow);
            }
            mesh.setAttributes(gltf.MeshAttributeType.POSITION, vertices);
            mesh.setAttributes(gltf.MeshAttributeType.NORMAL, normals);
            mesh.setAttributes(gltf.MeshAttributeType.TEXCOORD_0, uvs);
            // Indices.
            const tris = new Array<number>();
            for (let iy = 0; iy < heightSegments; iy++) {
                for (let ix = 0; ix < widthSegments; ix++) {
                    const a = grid[iy][ix + 1];
                    const b = grid[iy][ix];
                    const c = grid[iy + 1][ix];
                    const d = grid[iy + 1][ix + 1];

                    if (iy !== 0) {
                        tris.push(a, d, b);
                    }

                    if (iy !== heightSegments - 1) {
                        tris.push(b, d, c);
                    }
                }
            }

            const indices = mesh.getIndices() as Uint16Array;
            for (let i = 0, l = tris.length; i < l; i++) {
                indices[i] = tris[i];
            }

            return mesh;
        }
    }
}
