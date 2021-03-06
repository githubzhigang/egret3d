namespace egret3d {
    /**
     * 
     */
    export class Shader extends GLTFAsset {
        /**
         * @internal
         */
        public _renderQueue?: number;
        /**
         * @internal
         */
        public _defines?: string[];
        /**
         * @internal
         */
        public _states?: gltf.States;
        /**
         * @internal
         */
        public constructor(config: GLTF, name: string) {
            super(name);

            this.config = config;
        }
    }
}