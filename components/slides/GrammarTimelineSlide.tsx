import React, { useRef, useEffect } from 'react';
import { SlideConfig } from '../../types';
import * as d3 from 'd3';
import { motion } from 'framer-motion';

interface GrammarTimelineSlideProps {
  slide: SlideConfig;
  isActive: boolean;
}

export const GrammarTimelineSlide: React.FC<GrammarTimelineSlideProps> = ({ slide, isActive }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !isActive) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = svgRef.current.clientWidth;
    const height = 300;
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };

    const timelineY = height / 2;

    // 1. Draw Base Line
    svg.append("line")
      .attr("x1", margin.left)
      .attr("y1", timelineY)
      .attr("x2", width - margin.right)
      .attr("y2", timelineY)
      .attr("stroke", "#334155")
      .attr("stroke-width", 4)
      .attr("stroke-linecap", "round");

    // Data for tenses
    const points = [
      { x: margin.left, label: "PAST", color: "#94a3b8", type: "static" },
      { x: width / 2, label: "NOW", color: "#6366f1", type: "active", desc: "Present Continuous" },
      { x: width - margin.right, label: "FUTURE", color: "#94a3b8", type: "static" }
    ];

    // 2. Draw Points
    const nodes = svg.selectAll(".node")
      .data(points)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.x}, ${timelineY})`);

    // Circles
    nodes.append("circle")
      .attr("r", 0)
      .attr("fill", "#0f172a")
      .attr("stroke", d => d.color)
      .attr("stroke-width", 3)
      .transition()
      .duration(1000)
      .delay((d, i) => i * 300)
      .attr("r", d => d.type === 'active' ? 12 : 6);

    // Labels
    nodes.append("text")
      .text(d => d.label)
      .attr("y", -30)
      .attr("text-anchor", "middle")
      .attr("fill", d => d.color)
      .attr("font-family", "Space Grotesk")
      .attr("font-weight", "bold")
      .style("opacity", 0)
      .transition()
      .duration(500)
      .delay((d, i) => i * 300 + 500)
      .style("opacity", 1);

    // Active Animation (Ripple)
    const activeNode = svg.selectAll(".node").filter((d: any) => d.type === 'active');
    
    function pulse() {
       activeNode.insert("circle", ":first-child")
        .attr("r", 12)
        .attr("fill", "transparent")
        .attr("stroke", "#6366f1")
        .attr("stroke-width", 2)
        .attr("opacity", 1)
        .transition()
        .duration(2000)
        .attr("r", 60)
        .attr("opacity", 0)
        .remove()
        .on("end", pulse);
    }
    
    // Start pulse after initial animation
    setTimeout(pulse, 1500);

    // Annotations for "Around Now"
    const bracket = svg.append("path")
        .attr("d", `M ${(width/2) - 80} ${timelineY + 30} q 0 10 10 10 h 140 q 10 0 10 -10`)
        .attr("fill", "none")
        .attr("stroke", "#6366f1")
        .attr("stroke-width", 2)
        .attr("opacity", 0);

    bracket.transition()
        .delay(2000)
        .duration(500)
        .attr("opacity", 1);
        
    svg.append("text")
        .text("Temporary action happening around now")
        .attr("x", width/2)
        .attr("y", timelineY + 60)
        .attr("text-anchor", "middle")
        .attr("fill", "#818cf8")
        .attr("font-size", "14px")
        .attr("opacity", 0)
        .transition()
        .delay(2200)
        .duration(500)
        .attr("opacity", 1);

  }, [isActive]);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full px-4">
      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: isActive ? 0 : -20, opacity: isActive ? 1 : 0 }}
        className="text-3xl md:text-4xl font-heading font-bold mb-8 text-white"
      >
        The Grammar Timeline
      </motion.h2>
      
      <div className="w-full max-w-4xl h-[300px] bg-slate-900/50 rounded-2xl border border-slate-800 shadow-inner overflow-visible">
        <svg ref={svgRef} className="w-full h-full overflow-visible" />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ delay: 2.5 }}
        className="flex flex-wrap justify-center gap-4 mt-8"
      >
          {[
              { label: 'Simple', desc: 'Facts / Habits' },
              { label: 'Continuous', desc: 'Temporary / Changing' },
              { label: 'Perfect', desc: 'Past Action, Result Now' }
          ].map((tag, i) => (
              <div key={i} className="bg-slate-800 px-6 py-3 rounded-xl border border-slate-700 flex flex-col items-center">
                  <span className="font-bold text-white text-sm">{tag.label}</span>
                  <span className="text-xs text-slate-400">{tag.desc}</span>
              </div>
          ))}
      </motion.div>
    </div>
  );
};