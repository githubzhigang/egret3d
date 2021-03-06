namespace paper {
    export const enum RendererEventType {
        Materials = "materials",
    }

    const _helpVector3A = egret3d.Vector3.create();
    /**
     * renderer component interface
     * @version paper 1.0
     * @platform Web
     * @language en_US
     */
    /**
     * 渲染器组件接口
     * @version paper 1.0
     * @platform Web
     * @language zh_CN
     */
    export abstract class BaseRenderer extends BaseComponent {
        /**
         * @internal
         */
        public _boundingSphereDirty: boolean = true;
        @serializedField
        protected _receiveShadows: boolean = false;
        @serializedField
        protected _castShadows: boolean = false;
        @serializedField
        protected _lightmapIndex: number = -1;
        protected readonly _boundingSphere: egret3d.Sphere = egret3d.Sphere.create();
        protected readonly _aabb: egret3d.AABB = egret3d.AABB.create();
        @serializedField
        protected readonly _lightmapScaleOffset: Float32Array = new Float32Array([1.0, 1.0, 0.0, 0.0]);

        protected _recalculateSphere() {
            const worldMatrix = this.gameObject.transform.getWorldMatrix();
            this._boundingSphere.set(this._aabb.center, this._aabb.boundingSphereRadius);
            this._boundingSphere.center.applyMatrix(worldMatrix);
            this._boundingSphere.radius *= worldMatrix.getMaxScaleOnAxis();
        }
        /**
         * 重新计算 AABB。
         */
        public abstract recalculateAABB(): void;
        /**
         * 
         */
        @editor.property(editor.EditType.CHECKBOX)
        public get receiveShadows() {
            return this._receiveShadows;
        }
        public set receiveShadows(value: boolean) {
            if (value === this._receiveShadows) {
                return;
            }

            this._receiveShadows = value;
        }
        /**
         * 
         */
        @editor.property(editor.EditType.CHECKBOX)
        public get castShadows() {
            return this._castShadows;
        }
        public set castShadows(value: boolean) {
            if (value === this._castShadows) {
                return;
            }

            this._castShadows = value;
        }
        /**
         * 
         */
        @editor.property(editor.EditType.NUMBER)
        public get lightmapIndex() {
            return this._lightmapIndex;
        }
        public set lightmapIndex(value: number) {
            if (value === this._lightmapIndex) {
                return;
            }

            this._lightmapIndex = value;
        }
        /**
         * 
         */
        public get aabb(): Readonly<egret3d.AABB> {
            return this._aabb;
        }
        /**
         * 
         */
        public get boundingSphere(): Readonly<egret3d.Sphere> {
            if (this._boundingSphereDirty) {
                this._recalculateSphere();
                this._boundingSphereDirty = false;
            }

            return this._boundingSphere;
        }
        /**
         * TODO
         */
        public get lightmapScaleOffset() {
            return this._lightmapScaleOffset;
        }
    }
}