import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../globals.css"

function MainPageLoader() {
  return (
    <div className="">
        <div className="md:p-7">
          <div className="pt-14">
            <h1 className="text-7xl font-semibold text-gray-900 text-left mb-2">
              <Skeleton />
            </h1>
            <div className="flex items-center flex-wrap gap-2">
                <Skeleton />w
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
                  <article>
                    <Skeleton />
                    <div className="space-y-4">
                      <Skeleton />
                    </div>
                  </article>
                </div>
                <div>
                  <article>
                    <Skeleton />
                    <div className="space-y-4">
                      <Skeleton />
                    </div>
                  </article>
                </div>
                <div>
                  <article>
                    <Skeleton />
                    <div className="space-y-4">
                      <Skeleton />
                    </div>
                  </article>
                </div>
                <div>
                  <article>
                    <Skeleton />
                    <div className="space-y-4">
                      <Skeleton />
                    </div>
                  </article>
                </div>
                <div>
                  <article>
                    <Skeleton />
                    <div className="space-y-4">
                      <Skeleton />
                    </div>
                  </article>
                </div>
                <div>
                  <article>
                    <Skeleton />
                    <div className="space-y-4">
                      <Skeleton />
                    </div>
                  </article>
                </div>
                <div>
                  <article>
                    <Skeleton />
                    <div className="space-y-4">
                      <Skeleton />
                    </div>
                  </article>
                </div>
                <div>
                  <article>
                    <Skeleton />
                    <div className="space-y-4">
                      <Skeleton />
                    </div>
                  </article>
                </div>
                <div>
                  <article>
                    <Skeleton />
                    <div className="space-y-4">
                      <Skeleton />
                    </div>
                  </article>
                </div>
                <div>
                  <article>
                    <Skeleton />
                    <div className="space-y-4">
                      <Skeleton />
                    </div>
                  </article>
                </div>
                <div>
                  <article>
                    <Skeleton />
                    <div className="space-y-4">
                      <Skeleton />
                    </div>
                  </article>
                </div>
            <div>
              {/* <div className="rounded bg-white shadow p-4 md:p-6 flex flex-col">
                <div>
                  <article>
                    <Skeleton />
                    <div className="space-y-4">
                      <Skeleton />
                    </div>
                  </article>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
  );
}

export default MainPageLoader;
